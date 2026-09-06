export const name="brackets-square-fill";
export const id="dl_4504c3228e9841dfb2b2";
export const url=new URL("../icons/brackets-square-fill.svg?v=c05e5124c355affa9e9b7347cf435c7a376d8562f07cb6e0aacb73e3166dab66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
