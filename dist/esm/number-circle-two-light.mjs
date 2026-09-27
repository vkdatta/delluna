export const name="number-circle-two-light";
export const id="dl_7c805359eb34494e9332";
export const url=new URL("../icons/number-circle-two-light.svg?v=ae4f87f1780ae4f60b86ad22779aa682e89055b508915de35474d137db27f824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
