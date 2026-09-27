export const name="tennis-ball-thin";
export const id="dl_94b9eb79c773004db629";
export const url=new URL("../icons/tennis-ball-thin.svg?v=11fab387e25f6b89fec8dbff1d296139a5a2950315559da2d05bf62b5d6050ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
