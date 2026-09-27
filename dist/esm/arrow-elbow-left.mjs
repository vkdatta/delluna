export const name="arrow-elbow-left";
export const id="dl_6ddec2f5c0d14198ae8d";
export const url=new URL("../icons/arrow-elbow-left.svg?v=f96099c9b9fe0ec922ddd6c552b539e12a864ec02a401bc818593208c07d0938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
