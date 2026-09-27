export const name="volleyball-thin";
export const id="dl_03f830cb548cab4f7e17";
export const url=new URL("../icons/volleyball-thin.svg?v=dca0e1043e6b2f827e6df92ccf9422da425a2b34ad925f9660e5909e901903ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
