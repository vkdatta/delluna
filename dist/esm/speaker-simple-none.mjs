export const name="speaker-simple-none";
export const id="dl_b1ddb0c8ac6046d48aa3";
export const url=new URL("../icons/S/speaker-simple-none.svg?v=3f30f2490347b4a974bfe12459f27cce3b6fb318a9e1c62e2fd16147352f9318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
