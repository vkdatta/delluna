export const name="snowboarding";
export const id="dl_c0dcce005bb61ac9da47";
export const url=new URL("../icons/snowboarding.svg?v=a335de9957cf12e27832e01dd723c68a656b499442a9d5b4fa41d0f3c5823840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
