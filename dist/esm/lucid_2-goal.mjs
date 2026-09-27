export const name="lucid_2-goal";
export const id="dl_75e35904337946f2b237";
export const url=new URL("../icons/lucid_2-goal.svg?v=3dbf608fccaef5ccdd95450407bc9b3a5bd32ebeecf54c9c696d677a0ea5c2c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
