export const name="test-tubes";
export const id="dl_2b1a2a69c29f4ec68503";
export const url=new URL("../../icons/lucid_4/test-tubes.svg?v=5bb29b3a14adf93dbf5d7f171fb4fc8de7b299281082105bc60549d4f234b790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
