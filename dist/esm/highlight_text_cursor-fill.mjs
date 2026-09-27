export const name="highlight_text_cursor-fill";
export const id="dl_a0c66a9caa492ed928aa";
export const url=new URL("../icons/highlight_text_cursor-fill.svg?v=6bad022a14526428c778c3029b46256ca068d3e37a228e64da064d7d16ca7ad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
