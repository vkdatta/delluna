export const name="dice-four-thin";
export const id="dl_db1ec6774b2b4b169564";
export const url=new URL("../icons/dice-four-thin.svg?v=b621e50b82759ab0711b4ac79235700c061af4f3c47e47e22cb5e65f40281b08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
