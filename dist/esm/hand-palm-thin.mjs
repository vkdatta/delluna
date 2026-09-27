export const name="hand-palm-thin";
export const id="dl_adba8af2ca2942078c02";
export const url=new URL("../icons/hand-palm-thin.svg?v=a6ab4ee46c9b0d7e753893417f5bc80d05d0b0536c8e7de2c4b338822c0ecbbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
