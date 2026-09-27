export const name="fallout-shelter-thin";
export const id="dl_d53252257ff04cc29480";
export const url=new URL("../icons/fallout-shelter-thin.svg?v=b8b4af04c501a6e7ec2a1e61758190326297e0f019b5a311d8c26f6f84af1379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
