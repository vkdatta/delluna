export const name="lucid_3-octagon-x";
export const id="dl_970e7561ec024b5faac7";
export const url=new URL("../icons/lucid_3-octagon-x.svg?v=05d85957d098726fa73db4c3201ba7294ab948f97ae839b2467bd072bc59eed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
