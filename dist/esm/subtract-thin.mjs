export const name="subtract-thin";
export const id="dl_6e43a7c735fa4758addf";
export const url=new URL("../icons/S/subtract-thin.svg?v=bbbb80323383a01e591d4580b087681e5c42b46cb7d455ea28cb5774a9c869a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
