export const name="question_exchange-fill";
export const id="dl_b5669cccf6ff482db018";
export const url=new URL("../icons/Q/question_exchange-fill.svg?v=63111021413ba606533c99ed8ba672c450e4fd66da418d2c29744db016c74e20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
