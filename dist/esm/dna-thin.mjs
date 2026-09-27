export const name="dna-thin";
export const id="dl_258a8c75d2a145be8fd9";
export const url=new URL("../icons/dna-thin.svg?v=bdc26ac6210da8bd85e746a0ebc49b00a22c51ed0feb434768b521252933a943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
