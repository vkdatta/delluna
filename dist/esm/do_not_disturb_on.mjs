export const name="do_not_disturb_on";
export const id="dl_9043704f42f941779ab0";
export const url=new URL("../icons/D/do_not_disturb_on.svg?v=2fc761d6e59da9d2e38431e050ce2080d4d925c070092913585c51a0ddfbf045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
