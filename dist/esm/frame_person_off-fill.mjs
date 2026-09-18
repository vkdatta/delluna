export const name="frame_person_off-fill";
export const id="dl_441bb4045a8e45bdbb7c";
export const url=new URL("../icons/frame_person_off-fill.svg?v=ce9acc4b2f8aa6a1106299b2f9fcafdd02b0922be78b7756a07215140bbd7ccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
