export const name="bulldozer-light";
export const id="dl_7ce6c8be6e3940c68da9";
export const url=new URL("../icons/bulldozer-light.svg?v=e706ff42fce224322a292f7542083738a81b1898de1ba0b196c8182eb0e061e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
