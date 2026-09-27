export const name="gear-six-thin";
export const id="dl_b9b2b1e7956e4ef2b0b0";
export const url=new URL("../icons/gear-six-thin.svg?v=fc2e15b3b732ac38f2a26cfb66706b1121823d8598baa3773f3761e7879f73f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
