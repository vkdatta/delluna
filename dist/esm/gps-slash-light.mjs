export const name="gps-slash-light";
export const id="dl_6ad74584de094860958d";
export const url=new URL("../icons/gps-slash-light.svg?v=46102993862b3f9bf2b4ce03569c651bf176a165e3f47f2348cca87587c43892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
