export const name="slack-logo-fill";
export const id="dl_4ebf39daf8769ccc10a7";
export const url=new URL("../icons/slack-logo-fill.svg?v=5a82304f8803163267f7feebde4bc6a54c603d42e22207d782ccc6b0d4565ec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
