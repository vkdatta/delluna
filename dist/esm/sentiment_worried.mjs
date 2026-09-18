export const name="sentiment_worried";
export const id="dl_aa977175b3444e8fa939";
export const url=new URL("../icons/S/sentiment_worried.svg?v=2a170c2b2f551e1caad528d1a8a53c5ea219fe1779780637ca20a3d4be2e4c2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
