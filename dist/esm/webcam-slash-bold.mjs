export const name="webcam-slash-bold";
export const id="dl_6dab21ad763503e85583";
export const url=new URL("../icons/webcam-slash-bold.svg?v=3f70e43e82d3b0609800528afe3ab1c1974b683de5b169fd56224231682225fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
