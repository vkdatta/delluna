export const name="racquet";
export const id="dl_f1620339e6d649e383ba";
export const url=new URL("../icons/racquet.svg?v=3d930e183b183ea6e28604daa691f3c6b034110d72bfb489ec426530e34f1c97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
