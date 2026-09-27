export const name="two_wheeler";
export const id="dl_b829c2b4b87732115bd9";
export const url=new URL("../icons/two_wheeler.svg?v=f01a9d07ce75c1b476ca102535bb67201b31f002e57e21cede3c903cf30bba52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
