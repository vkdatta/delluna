export const name="toys_and_games-fill";
export const id="dl_97de159b49cb67c2fd45";
export const url=new URL("../icons/toys_and_games-fill.svg?v=5845233e11131218f5b3a8260338c09ea3014c04e9bc889bec2e8221f083bb73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
