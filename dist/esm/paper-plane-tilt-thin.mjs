export const name="paper-plane-tilt-thin";
export const id="dl_93dcd0ec15164cbc8b0e";
export const url=new URL("../icons/paper-plane-tilt-thin.svg?v=fb306cf8f45af6093dbae53219d408b3b7cb5d3a06e2c4a52b4abb770407ec53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
