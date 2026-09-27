export const name="align-right-simple-thin";
export const id="dl_86a96b7d425b43068064";
export const url=new URL("../icons/align-right-simple-thin.svg?v=75297f65b9bc131d25d4a95d038e5925bc595bb7607e8623569b14ad53b1954e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
