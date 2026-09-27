export const name="swipe_up";
export const id="dl_da344a316254e5676a83";
export const url=new URL("../icons/swipe_up.svg?v=33c16221ed0c4b4d48086bce465e94a859b08d3a1ba2b349b99f8b2363303469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
