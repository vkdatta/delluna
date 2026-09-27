export const name="bell-simple-slash-bold";
export const id="dl_25feac8c19034981bb88";
export const url=new URL("../icons/bell-simple-slash-bold.svg?v=928a240fbf267adea89f40cf08e60fdcfe57ceaebdfe5986a08a2e03ad6d60cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
