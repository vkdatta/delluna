export const name="spinner-gap-bold";
export const id="dl_c3398f06e368465a3ce6";
export const url=new URL("../icons/spinner-gap-bold.svg?v=dcce824672356b7c559773b3dbbd778bee557d5ba53e87b1f5df2372b0817a57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
