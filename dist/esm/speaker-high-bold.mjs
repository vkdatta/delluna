export const name="speaker-high-bold";
export const id="dl_231e4cd0c7f14eabb48f";
export const url=new URL("../icons/S/speaker-high-bold.svg?v=f0fc825cb96958238882b98aea55afdb63da92c4c5c8b499c0e1068e9abb299e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
