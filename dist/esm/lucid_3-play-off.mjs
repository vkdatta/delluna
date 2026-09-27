export const name="lucid_3-play-off";
export const id="dl_4d5795264b6f419eb15c";
export const url=new URL("../icons/lucid_3-play-off.svg?v=f1421f3d4d381d7bf96ee1c5bde6e8ce24a8e09d6c2376178664655a0287920d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
