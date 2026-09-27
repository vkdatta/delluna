export const name="game_stick_right-fill";
export const id="dl_05ab859a978dcd949c2e";
export const url=new URL("../icons/game_stick_right-fill.svg?v=8aabc6edc07754d16d440bbcf3e1ee05438c00a2de1f54b48efaac37a28e1b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
