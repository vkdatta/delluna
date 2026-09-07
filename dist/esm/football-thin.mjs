export const name="football-thin";
export const id="dl_78baa5a5ec5149c7bab5";
export const url=new URL("../icons/football-thin.svg?v=566c799af11377ffe11a490cdd0ce6efe4f35e7eda5bf8c3389284ac4534dfbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
