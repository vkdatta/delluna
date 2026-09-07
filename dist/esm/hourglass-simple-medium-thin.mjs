export const name="hourglass-simple-medium-thin";
export const id="dl_a7c0510b802541f59adc";
export const url=new URL("../icons/hourglass-simple-medium-thin.svg?v=b91c2ff5b29d72de29f76230e926407db4d82d73bbc13b7d6d5bc817965e0447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
