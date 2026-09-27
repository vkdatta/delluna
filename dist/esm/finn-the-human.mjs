export const name="finn-the-human";
export const id="dl_9d23827e48b54bb1b5e8";
export const url=new URL("../icons/finn-the-human.svg?v=57bb3cfde2af9fad441ef8c6cd7de278c5844e9792deeb126c0eae001dace31a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
