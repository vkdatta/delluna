export const name="dots-three-outline-thin";
export const id="dl_9e281b1f9fc741f4aed0";
export const url=new URL("../icons/dots-three-outline-thin.svg?v=62bd897f415fe547088e0bd8cf69bdccf4ac6931b665db748aacecded83f4316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
