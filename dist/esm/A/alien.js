export const name="alien";
export const id="dl_1b162916722a496db308";
export const url=new URL("../../icons/A/alien.svg?v=9d6711067d0ae9660eb1cfe1c6c64f08543909e47dea967d0ae58506e1a43956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
