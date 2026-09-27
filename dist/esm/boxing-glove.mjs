export const name="boxing-glove";
export const id="dl_dbdbaef1d86e4637845b";
export const url=new URL("../icons/boxing-glove.svg?v=a43dad36fcc9dd9e6c321475afe1b576d21787b4781b75967fd22632798c7a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
