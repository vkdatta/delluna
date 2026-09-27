export const name="text_select_move_up";
export const id="dl_118b2170a8d7e8808e0b";
export const url=new URL("../icons/text_select_move_up.svg?v=f1a9626a15747d0839bf183b6a4404b8fa9ae1d84632ef1e4f1fe8b917c1ac79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
