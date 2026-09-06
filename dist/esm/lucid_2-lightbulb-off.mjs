export const name="lucid_2-lightbulb-off";
export const id="dl_9d1f369aba5540a096e6";
export const url=new URL("../icons/lucid_2-lightbulb-off.svg?v=268fa9db204baf7e2af538a436839552c1cba868a42a00b67cdadee952062100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
