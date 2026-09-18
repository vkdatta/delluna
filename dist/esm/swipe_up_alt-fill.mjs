export const name="swipe_up_alt-fill";
export const id="dl_d0ebe187f2ce424293ea";
export const url=new URL("../icons/swipe_up_alt-fill.svg?v=a1ee49b65627e98ef2d02b8b2996ea6a51417f37c060268d20d691c566db6a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
