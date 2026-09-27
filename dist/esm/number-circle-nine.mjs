export const name="number-circle-nine";
export const id="dl_f37cdc4fe69f441194fc";
export const url=new URL("../icons/number-circle-nine.svg?v=725aae1cfbeed02398a778c23668ea16478039999c60cd72e4f54fc65333fec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
