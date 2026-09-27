export const name="voting_chip";
export const id="dl_2a5647373131bca4cdec";
export const url=new URL("../icons/voting_chip.svg?v=6f4c53dc7ebd697b96a527f8de025a988c3006a455dcb8b8915bbcc134c04614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
