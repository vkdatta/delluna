export const name="framer-logo-thin";
export const id="dl_eefff701a2a04f969b3e";
export const url=new URL("../icons/framer-logo-thin.svg?v=6596f145656b2d78dcba0468a99bc12cc78d517eb3eea5ea33b214456fb31c5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
