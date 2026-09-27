export const name="airplane-landing-thin";
export const id="dl_6761693623a7406ca286";
export const url=new URL("../icons/airplane-landing-thin.svg?v=c8dc4f44acea3b5b8f39b9b0c49cf53640f4292b937683c9d8478b463a6a52cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
