export const name="bandaids-bold";
export const id="dl_500de3a3379944958ef0";
export const url=new URL("../icons/bandaids-bold.svg?v=e2fb30901363abb5b680238624b9aa179b428eb165796814fa95dabc6bdf48b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
