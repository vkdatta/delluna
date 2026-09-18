export const name="clock_loader_10";
export const id="dl_853394350faf4d118428";
export const url=new URL("../icons/clock_loader_10.svg?v=ebfcef5003521c9a3a79484d292859bdd9ad97f0730e855e0c0fd31a79316a76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
