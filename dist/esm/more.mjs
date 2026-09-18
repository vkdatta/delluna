export const name="more";
export const id="dl_78b8d3b13ec24a76be19";
export const url=new URL("../icons/M/more.svg?v=a61bdcdfcddb7c5f82fe22800cdc1b3e73a19385973dcf5fa50e19f63bcc2b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
