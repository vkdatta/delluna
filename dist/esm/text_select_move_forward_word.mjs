export const name="text_select_move_forward_word";
export const id="dl_f90a564478e0984dda04";
export const url=new URL("../icons/text_select_move_forward_word.svg?v=dfd8b75c55d6413187fc79890f98fb4f9f52589fafb577baf775176d95b8eae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
