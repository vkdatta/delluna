export const name="arrow-elbow-up-left-fill";
export const id="dl_2b3fdbad991a4fa185f0";
export const url=new URL("../icons/arrow-elbow-up-left-fill.svg?v=4c6e225fd07b4d4904a24f8f0b36d590ac885db8562856efd9bb25117acc84ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
