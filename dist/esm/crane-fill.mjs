export const name="crane-fill";
export const id="dl_9ca947349fc04c65a769";
export const url=new URL("../icons/crane-fill.svg?v=917a8642eba5bddf666964355aa7fc8cdd0c80c8b3ca5a4f2c3e3003d4e2da0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
