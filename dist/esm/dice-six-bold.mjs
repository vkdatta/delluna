export const name="dice-six-bold";
export const id="dl_ea2b0ab6afe8427c9d39";
export const url=new URL("../icons/dice-six-bold.svg?v=acd0106a3aba13e14160923591410a92669dd21bda3b255d7966cd7e6e77d003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
