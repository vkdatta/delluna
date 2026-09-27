export const name="align-bottom-thin";
export const id="dl_a7c786d0797a4d6fa1fd";
export const url=new URL("../icons/align-bottom-thin.svg?v=683c52799e1d6c89df540ce5a6f46f104e6c693ca9f6095ad6c5ab7a46d2df45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
