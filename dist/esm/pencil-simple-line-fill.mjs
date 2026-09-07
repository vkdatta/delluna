export const name="pencil-simple-line-fill";
export const id="dl_75c20471751f493eb34b";
export const url=new URL("../icons/pencil-simple-line-fill.svg?v=986a8e065128b40a7f2f65f092254599bfc4ed17c060c47ec713b78e7f6a4c6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
